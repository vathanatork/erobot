<template lang="">
    <a href="#">
        <div class="block_card">
            <div class="block_card_flex">
                <div class="logo">
                    <n-avatar data-logo
                        size="medium"
                        :src="card.logo"
                    />
                </div>
                <div class="job_content">
                    <div class="job_content_above">
                        <h1>{{card.title}}</h1>
                    </div>

                    <div class="job_content_mid"  >
                        <!-- item -->
                        <div class="job_content_mid_item" v-for="item in card.postInfo">
                            <n-avatar
                                size="small"
                                :src="item.icon"
                            />
                            <p>{{item.text}}</p>  
                        </div>
                    </div>

                    <div class="job_content_under">
                        <div v-for="(btn,key) in card.button" renderBtnColor>
                            <n-button v-if="(key%2)==0" type="warning" style="height:2.3rem; border-radius:1.2rem;">
                            {{btn}}
                            </n-button>

                            <n-button v-else type="error" style="height:2.3rem; border-radius:1.2rem;">
                            {{btn}}
                            </n-button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>


<script>
export default {
    props:['card'],
}
</script>


<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@200;300;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap');
  
    /* -------------custom style naive's component---------------  */

    /* logo */
    .n-avatar[data-logo]{
        width: 5rem;
        height: 5rem;
    }

    /* -------------class binded------------ */
    .color{
        background: red;
        color: black;
    }

    /* -------------general style----------- */
    h1{
        font-size: 2rem;
        font-weight: 400;
        text-align: start;
    }
    p{
        font-size: 1.5rem;
        font-weight: 400;
        text-align: start;
        color:#7090B0;
    }
    /* ---------card---------------- */
    .block_card{
        width:88rem;
        height: 17rem;
        border: 0.01px solid rgb(187, 185, 185);
        padding: 3rem;
        
    }

    .block_card_flex{
        display: flex;
        gap: 3rem;
    }
    /* ---------mid content ---------*/

    .job_content_mid{
        margin-top:2.4rem;
        display: flex;
        gap:2rem;
        align-items: center;
    }

    .job_content_mid_item{
        display: flex;
        gap:1.5rem;
    }

    .n-avatar{
        height: 2rem;
        width: 2rem;
    }

    /* --------under content-------- */
    .job_content_under{
        margin-top:3rem;
        display: flex;
        gap:2.5rem;
    }
    
</style>