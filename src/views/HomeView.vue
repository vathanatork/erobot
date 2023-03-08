<template>
    <div class="home">
            <div class="heading">Find Your Dream Job</div>
            <div class="filter">
              <p>show 10 posts</p>
              <n-space vertical>
                <n-dropdown
                  placement="bottom-start"
                  trigger="click"
                  size="small"
                  :options="options"
                  @select="handleSelect"
                >
                  <n-button>filter</n-button>
                </n-dropdown>
              </n-space>
            </div>
            <div v-for="(job,key) in card " :key="job.id">
            <Jobcard :card="card[key]"/>
            </div>
            <n-space vertical>
            <n-pagination v-model:page="page" :page-count="10" :page-slot="5" />
            </n-space>
    </div>
</template>

<script >
// @ is an alias to /src
import Jobcard from '@/components/Jobcard.vue'
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";
import { ref } from 'vue'

const options = [
  {
    label: "Jay Gatsby",
    key: "jay gatsby"
  },
  {
    label: "Daisy Buchanan",
    key: "daisy buchanan"
  },
  {
    type: "divider",
    key: "d1"
  },
  {
    label: "Nick Carraway",
    key: "nick carraway"
  },
  {
    label: "Others",
    key: "others1",
  }
];

export default {
  name: 'HomeView',
  components:{
    Jobcard,
  },

  data(){
    return {
      page: ref(2),
      card:[
        {
          id:1,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:2,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        },
        {
          id:3,
          logo: require("../assets/image/logo1.png"),
          title: "Software Engineer (Android), Libraries",
          postInfo:[
            {
              icon: require("../assets/image/logo1.png"),
              text: "segment"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text: "time"
            },
            {
              icon: require("../assets/image/logo1.png"),
              text:"salary"
            }
          ],
          button:["fulltime","Private","urgent"]
        }
      ],  
      options,
      handleSelect(key) {
        message.info(String(key));
      }   
    }
  }
}
</script>

<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    height: 100vh;
    width: 100vw;
  }

  .heading{
    margin-top: 100px ;
        width: 88rem;
        height: 200px;
        border: 0.01px solid rgb(187, 185, 185);
        padding: 3rem;
        background-color: #EFF4FB;
        font-size: 2.4rem;
        text-align: center;
  }
  .filter{
    width: 88rem;
    display: flex;
    justify-content: space-between;
  }

  .filter p{
    font-size: 1.6rem ;
    color: #7090B0;
  }
</style>