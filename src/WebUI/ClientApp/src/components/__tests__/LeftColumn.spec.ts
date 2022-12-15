import {describe, it, expect} from 'vitest'
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import {mount} from '@vue/test-utils'
import LeftColumn from '../LeftColumn.vue'

describe('RightColumn', () => {
    const vuetify = createVuetify({components, directives})

    it('renders properly', () => {
        const wrapper = mount(LeftColumn, {
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.text()).toContain('Left A')
    })
})
