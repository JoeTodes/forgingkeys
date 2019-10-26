import pageComponents from '@internal/page-components'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    for (const [name, component] of Object.entries(pageComponents)) {
        Vue.component(name, component)
    }
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({})
}