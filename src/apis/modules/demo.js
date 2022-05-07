import axios from '@/utils/axios'
export default {
    hello() {
        return axios({
            method: 'get',
            url: '/home/hello',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        })
    }
}