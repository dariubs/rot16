function rot16(s) {
    return s.replace(/[\u0627-\u06CC]/g, function (c) {
        return "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی".charAt(
            "صضطظعغفقکگلمنوهیابپتثجچحخدذرزژسش".indexOf(c)
        );
    });
}

var app = new Vue({
    el: '#rot16',
    data: {
        message: "",
        output: ""
    },
    watch: {
        message: function () {
            this.output = rot16(this.message)
        }
    }
});