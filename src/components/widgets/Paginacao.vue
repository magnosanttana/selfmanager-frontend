<template>
  <nav>
    <ul class="pagination">
        <li :class="{'disabled': page < 2}" @click="$emit('pageMudou', page -1)">
            <a href="javascript:void(0);">
                <i class="material-icons">chevron_left</i>
            </a>
        </li>
        <li v-for="p in total_pages" :key="p" :class="{'active': (page == p)}" @click="$emit('pageMudou', p)"><a href="javascript:void(0);" class="waves-effect">{{p}}</a></li>
        <li :class="{'disabled': page >= total_pages}" @click="$emit('pageMudou', page + 1)">
            <a href="javascript:void(0);" class="waves-effect">
                <i class="material-icons">chevron_right</i>
            </a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Paginacao',
    props: [
        'total_pages',
        'page',
        'per_page'
    ],

    data: function(){
        return {
            
        }
    },

    methods: {
        
    }
    
}
</script>

<style>

</style>