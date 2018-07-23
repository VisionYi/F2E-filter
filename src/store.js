import Vue from 'vue';
import Vuex from 'vuex';
import serviceMain from '@/service/main';
import { CATEGORY } from '@/shared/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    search: '',
    selectors: [],
    checkbox: {
      items: ['免費參觀', '全天候開放'],
      value: [],
    },
    loading: false,
  },
  getters: {
    list: state => state.list,
    loading: state => state.loading,
    search: state => state.search,
    selectors: state => [...state.selectors],
    tagSelectors: state => state.selectors.filter(item => item.value !== '全部'),
    checkboxItems: state => [...state.checkbox.items],
    checkboxValue: state => [...state.checkbox.value],
    getListItemById: state => id => state.list.find(item => item.id === id),

    getSelectorItems: state => (property, firstItem = '') => {
      const objNumberPerItem = state.list.reduce(
        (obj, item) => {
          if (item[property] in obj) {
            obj[item[property]] += 1;
          } else {
            obj[item[property]] = 0;
          }
          return obj;
        },
        {},
      );
      const items = Object.keys(objNumberPerItem);
      if (firstItem !== '') items.unshift(firstItem);

      return items;
    },
  },
  actions: {
    async initialData({ commit, getters }) {
      commit('setLoading', true);
      const data = (await serviceMain.getAllData()).result.records;

      const list = data.map(item => ({
        id: item.Id,
        name: item.Name,
        openTime: item.Opentime,
        description: item.Description, // 64
        picture: item.Picture1.replace('http', 'https'),
        zone: item.Zone,
        category: CATEGORY[item.Class1],
        ticketInfo: item.Ticketinfo,
        address: item.Add,
        website: item.Website,
      }));

      commit('setList', list);
      commit('setSelectors', [
        {
          id: 1,
          typeName: '地區',
          value: '全部',
          items: getters.getSelectorItems('zone', '全部'),
        },
        {
          id: 2,
          typeName: '類別',
          value: '全部',
          items: getters.getSelectorItems('category', '全部'),
        },
      ]);

      commit('setLoading', false);
    },
    closeTagSearch({ commit }) {
      commit('setSearch', '');
    },
    closeTagSelector({ commit }, id) {
      commit('updateSelector', { id, value: '全部' });
    },
    closeTagCheckbox({ commit }, name) {
      commit('deleteCheckboxValueItem', name);
    },
  },
  mutations: {
    setList(state, value) {
      state.list = value;
    },
    setSearch(state, value) {
      state.search = value;
    },
    setSelectors(state, value) {
      state.selectors = value;
    },
    setCheckboxItems(state, value) {
      state.checkbox.items = value;
    },
    setCheckboxValue(state, value) {
      state.checkbox.value = value;
    },
    deleteCheckboxValueItem(state, item) {
      state.checkbox.value.splice(state.checkbox.value.indexOf(item), 1);
    },
    setLoading(state, value) {
      state.loading = value;
    },
    updateSelector(state, { id, ...data }) {
      const index = state.selectors.findIndex(item => item.id === id);
      state.selectors.splice(index, 1, { ...state.selectors[index], ...data });
    },
  },
});
