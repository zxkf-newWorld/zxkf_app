<template>
    <div class="SearchDetail">
        <div class="search-head">
            <search-head></search-head>
            <search-tab></search-tab>
            <drop-down></drop-down>
            <select-tab></select-tab>
        </div>
        <div class="house-search-results">
            <house-search-details></house-search-details>
        </div>
        <ToBottom></ToBottom>
    </div>
</template>

<script>
import SearchHead from '../common/SearchHead'
import SearchTab from '../common/SearchTab'
import DropDown from '../common/DropDown'
import SelectTab from '../common/SelectTab'
import HouseSearchDetails from '../common/HouseSearDetails'
export default {
    name: 'SearchDetail',
    data() {
        return {

        };
    },
    components: {
        SearchHead,
        SearchTab,
        DropDown,
        SelectTab,
        HouseSearchDetails,
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped>
    .SearchDetail {
      overflow: hidden;
      overflow-y: hidden;
    }
    .SearchDetail::-webkit-scrollbar {
      display: none;
    }
    .search-head {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 5;
    }
    .house-search-results {
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 3.8rem;
        left: 0;
        overflow:hidden;
    }
    .house-search-results::-webkit-scrollbar {
      display: none;
    }
</style>
