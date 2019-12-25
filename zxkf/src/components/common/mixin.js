export default  {
    name: 'mixin',
    data () {
        return {
            pageHeight: '',
            pageWidth: '',
        }
    },
    beforeCreated () {
        
    }, 
    created () {
        this.getScreenHW();
    },
    mounted() {
        
    },
    methods: {
        /* 
         * 动态获取屏幕高度和宽度
         */
        getScreenHW () {
            let height = window.screen.availHeight;
            let width = window.screen.availWidth;
            this.pageHeight = height;
            this.pageWidth = width;
            console.log('屏幕高宽：',height, width);
        }
    },

}

