import {describe, it, expect} from 'vitest'
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import {mount} from '@vue/test-utils'
import HomeList from '../HomeList.vue'
import { dessert } from '../../models/dessert'

describe('RightColumn', () => {
    const vuetify = createVuetify({components, directives})

    const desserts: dessert[] = [
        {
            name: 'Frozen Yogurt',
            calories: 159,
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
        },
        {
            name: 'Eclair',
            calories: 262,
        },
        {
            name: 'Cupcake',
            calories: 305,
        },
        {
            name: 'Gingerbread',
            calories: 356,
        },
        {
            name: 'Jelly bean',
            calories: 375,
        },
        {
            name: 'Lollipop',
            calories: 392,
        },
        {
            name: 'Honeycomb',
            calories: 408,
        },
        {
            name: 'Donut',
            calories: 452,
        },
        {
            name: 'KitKat',
            calories: 518,
        },
    ]

    it('renders properly', () => {
        const wrapper = mount(HomeList, {
            props:{
                data: desserts
            },
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.text()).toContain('Honeycomb')
    })
})
