<template>
    <ul class="select-tab">
       <li @click="searchContent($event)" :class="selectType" data-selected="false">限时优惠</li>
       <li @click="searchContent($event)" :class="selectType" data-selected="false">全网低价</li>
       <li @click="searchContent($event)" :class="selectType" data-selected="false">租金月付</li>
       <li @click="searchContent($event)" :class="selectType" data-selected="false">近地铁</li>
       <li @click="searchContent($event)" :class="selectType" data-selected="false" >独卫</li>
       <li @click="searchContent($event)" :class="selectType" data-selected="false">平台认证</li> 
    </ul>
</template>

<script>
export default {
    name: 'selectTab',
    data() {
        return {
            clicked: false,
            // 选中样式
            selectType: {
                selected: true,
            },
        };
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        /* 
         * 查询指定内容中的房屋信息
         */
        searchContent (event) {
            let element = event.target;
            let content = event.target.innerText;
            let selec = event.target.dataset.selected;
            console.log(selec, '<<<<< selec');
            console.log(content);
            console.log(element.getAttribute('class'));
            let attendedClass = element.getAttribute('class');
            if (!selec) {
                element.removeAttribute('class')
                event.target[selected] = true;
            }
            console.log(event.target.dataset.selected);
            
            // console.log(object);
            // if (!this.clicked) {
            //     element.style.color = '#f00';
            //     this.clicked = !this.clicked;
            // } else {
            //     element.style.color = '#9b9b9b'
            //     this.clicked = !this.clicked;
            // }
            // 请求查询
        },
    }
};
</script>

<style scoped>                                                                                                                                                                                                                        
    .select-tab {
        position: relative;
        left: 0;
        padding: .2rem .2rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        list-style: none;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        overflow-x: auto;
    }
    .select-tab::-webkit-scrollbar {
        display: none;
    }
    .select-tab > li {
        height: .5rem;
        margin: 0 .1rem;
        line-height: .5rem;
        color: #000;
        flex: 0 0 23%;
        color: #9b9b9b;
        background: #e8e8e8;
        /* background: linear-gradient(to right bottom,#ffe6eb,#ff0000); */
        border-radius: .5rem;
    }
    .selected {
        font-weight: 500;
        color: #fff !important;
        background: linear-gradient(to right bottom, #ece0e0, #f74949) !important;
    }
</style>
