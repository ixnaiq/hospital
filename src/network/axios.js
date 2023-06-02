import axios from 'axios'
import originAxios from 'axios'

export default function ARJaxios(option) {
	return new Promise((resolve, reject) => {
		// 1.创建axios的实例
		const instance = originAxios.create({
			baseURL:  "http://117.50.163.249:8086",
			timeout: 5000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': localStorage.getItem('token')
              },
		}); 
		// 配置请求和响应拦截
		instance.interceptors.request.use(config => { 
			console.log(localStorage.getItem('token'))
			return config
		}, err => { 
			return err
		}) 
		instance.interceptors.response.use(response => { 
			return response.data
		}, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
		})

		// 2.传入对象进行网络请求
		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
