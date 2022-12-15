import {describe, it, expect} from 'vitest'
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import {mount} from '@vue/test-utils'
import RightColumn from '../RightColumn.vue'

describe('RightColumn', () => {
    const vuetify = createVuetify({components, directives})

    it('renders properly', () => {
        const wrapper = mount(RightColumn, {
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.text()).toContain('Right B')
    })
})
