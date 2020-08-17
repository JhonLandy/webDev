<template>
    <el-menu>
        <el-submenu>
            <template slot="title">
                <i class="el-icon-message"></i>
                {{item.text}}
            </template>
            <el-menu-item 
                v-for="(subItem, index) in item.items"
                :key="subItem.link"
            >
                <DropdownMeun
                    v-if="subItem.items"
                    :items="subItem.items"
                />
                <NavLink
                    v-else
                    :item="subItem"
                />
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import NavLink from '@theme/components/NavLink.vue'
const DropdownMeun = {
    name: 'DropdownMeun',
    components: {DropdownMeun, NavLink},
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
export default DropdownMeun;
</script>>