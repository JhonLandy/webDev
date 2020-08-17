<template>
<div>
    <div class="title" @click="doClick">
        <span class="nav-link"> {{item.text}} </span>
        <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <ul v-show="meunShow" class="meun">
        <li
            v-for="(subItem, index) in item.items"
            :key="index"
        >
            <DropdownMeun 
                v-if="subItem.items"
            />
            <NavLink
                v-else
                :item="subItem"
            />
        </li>
    </ul>
</div>
</template>
<script>
import NavLink from '@theme/components/NavLink.vue'
const DropdownMeun = {
    name: 'DropdownMeun',
    components: {DropdownMeun, NavLink},
    props: {
        item: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            meunShow: false
        }
    },
    methods: {
        doClick() {
            this.meunShow = !this.meunShow
        }
    }
}
export default DropdownMeun;
</script>
<style lang="stylus" scoped>
ul,li {list-style none; margin: 0;padding: 0}
</style>