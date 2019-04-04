const config = {
  baseUrl: '',
  surroundings: ''
}

const TYPE = process.env.NODE_ENV

switch (TYPE) {
  case 'production': { // 生产环境
    config.baseUrl = '/'
    config.surroundings = '生产环境'
    break
  }
  case 'development': { // 本地开发环境
    config.baseUrl = '/'
    config.surroundings = '本地开发环境'
    break
  }
}

export default config
