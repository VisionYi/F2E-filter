import Vue from 'vue';
import Vuex from 'vuex';
import serviceMain from '@/service/main';
import { CATEGORY } from '@/shared/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    search: '',
    selectors: [
      {
        id: 1,
        type: 'zone',
        typeName: '地區',
        value: '全部',
        items: [],
      },
      {
        id: 2,
        type: 'category',
        typeName: '類別',
        value: '全部',
        items: [],
      },
    ],
    checkbox: {
      items: {
        免費參觀: 'ticketInfo',
        全天候開放: 'openTime',
      },
      value: [],
    },
    loading: false,
    pageCurrent: 1,
  },
  getters: {
    list: state => state.list,
    loading: state => state.loading,
    pageCurrent: state => state.pageCurrent,
    search: state => state.search,
    selectors: state => state.selectors,
    tagSelectors: state => state.selectors.filter(item => item.value !== '全部'),
    checkboxItems: state => state.checkbox.items,
    checkboxValue: state => state.checkbox.value,
    getListItemById: state => id => state.list.find(item => item.id === id),

    getSelectorItems: state => (property, oderByItems, firstItem = '') => {
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

      let items = Object.keys(objNumberPerItem);
      if (oderByItems) items = oderByItems.filter(name => items.includes(name));
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
        name: item.Name.replace('?', ''),
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
      commit('updateSelector', {
        id: 1,
        items: getters.getSelectorItems('zone', null, '全部'),
      });
      commit('updateSelector', {
        id: 2,
        items: getters.getSelectorItems('category', Object.values(CATEGORY), '全部'),
      });

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
    setPageCurrent(state, value) {
      state.pageCurrent = value;
    },
    updateSelector(state, { id, ...data }) {
      const index = state.selectors.findIndex(item => item.id === id);
      state.selectors.splice(index, 1, { ...state.selectors[index], ...data });
    },
  },
});
