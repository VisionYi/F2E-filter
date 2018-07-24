import request from '@/shared/request';

export default {
  getAllData() {
    return request.get('/datastore_search', {
      params: {
        resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97',
        sort: 'Zone, Class1, Name asc',
        limit: '500',
      },
    });
  },
  getItem(id) {
    return request.get('/datastore_search', {
      params: {
        resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97',
        q: `{"Id": "${id}"}`,
      },
    });
  },
};
