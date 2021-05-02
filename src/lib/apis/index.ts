// eslint-disable-next-line no-restricted-imports
import { Apis, Configuration } from '/@/lib/apis/generated'

const apis = new Apis(new Configuration({ basePath: '/api' }))

export default apis
// eslint-disable-next-line no-restricted-imports
export * from '/@/lib/apis/generated'
