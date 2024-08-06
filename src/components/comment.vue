<template>

    <div id="comment" class="comment-respond">
        <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow"
                    id="cancel-comment-reply-link" href="/gridzone/2014/06/23/smashing-mystery/#respond"
                    style="display:none;">Cancel reply</a></small></h3>
        <form action="https://demo.alx.media/gridzone/wp-comments-post.php" method="post" id="commentform"
            class="comment-form">
            <!-- <div class="comment-notes">
                    <span id="email-notes">Your email address will not be published.</span> 
                    <span class="required-field-message">Required fields are marked<span class="required">*</span></span>
                </div> -->
            <div class="item">

                <label for="conrent" class="form-label">Comment <span class="required">*</span></label>
                <textarea class="form-control" v-model="form.content" rows="3" required="required"></textarea>
            </div>
            <div class="item"><label for="name" class="form-label">Name <span class="required">*</span></label>
                <input type="text" v-model="form.name" class="form-control" placeholder=""  required="required">
            </div>
            <div class="item"><label for="email" class="form-label">Email <span class="required">*</span></label> <input
                    v-model="form.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder=""  required="required">
            </div>
            <div class="item"><label for="url" class="form-label">Website</label> <input type="text" v-model="form.url"
                    class="form-control" placeholder=""></div>
            <div class="item m-t-10"><label for="wp-comment-cookies-consent"><input class="form-check-input m-r-4"
                        type="checkbox" v-model="form.isSave">Save my name, email,
                    and website
                    in this
                    browser for the next time I comment.</label></div>
            <div class="form-submit flex flex-jc-sb"><button type="button submit" class="btn btn-primary" @click="submit">Post
                    Comment</button>

                <button type="button " class="btn btn-light" v-if="id" @click="hideReply">Cancel reply</button>
            </div>
            <div style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce"
                    value="7dd937fc9f"></div>
            <div style="display: none !important;" class="akismet-fields-container" data-prefix="ak_">
                <label>Δ<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input
                    type="hidden" id="ak_js_1" name="ak_js" value="1719499485832">

            </div>
        </form>
    </div><!-- #respond -->


</template>
<script>
import eventbus from '@/utils/eventbus.js';
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        // 当前评论所在父级的序号
        parent: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            form: {
                content: '',
                email: '',
                name: '',
                url: '',
                isSave: false
            }
        }
    },
    created() {
        this.setForm()
    },
    methods: {
        setForm() {
            const commentor = localStorage.getItem("COMMENTOR") ? JSON.parse(localStorage.getItem("COMMENTOR")) : null
            if(commentor){
                this.form = {
                ...commentor,
                content: ''
            }
            }
         
        },
        submit() {
            
            //判断必填项是否填写
            if(this.form.content==''||this.form.name=='' ||this.form.email ==''){
                return
            }
            // 判断是否勾选了保存
            if (this.form.isSave) {
                localStorage.setItem("COMMENTOR", JSON.stringify(this.form))
            } else {
                localStorage.removeItem("COMMENTOR")
            }
            if (this.id) {
                eventbus.emit("pushReponse", {
                    ...this.form,
                    id: this.id,
                    parent: this.parent
                })
            } else {

                eventbus.emit("pushComment", this.form)
            }
            this.setForm()
            eventbus.emit('hideResponse');
            eventbus.emit('showComment');
        },
        //隐藏评论区域
        hideReply() {
            eventbus.emit('hideResponse');
            eventbus.emit('showComment');
        }
    }
}
</script>
<style lang="scss" scoped>
.m-r-4 {
    margin-right: 4px;
}

.form-label {
    color: #888;
    margin-bottom: 6px;
}

.item {
    padding-bottom: 6px;
}

.comment-reply-title {

    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
}

.form-submit {
    margin-top: 10px;
    .btn{
        width:121px;
        height:32px;
    }
}

.m-t-10 {
    margin-top: 10px;
}

.comment-respond {
    margin-top: 15px;
    background: #f5f5f5;
    padding: 10px 20px 20px;
    margin-bottom: 15px;
    border-radius: 10px;
}
</style>