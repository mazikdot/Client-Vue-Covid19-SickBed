<template>
    <div v-if ="user">
    <HeaderSickbed/>
    <SectionSickbed/>
    </div>
    <div v-else>
      
    </div>
   
</template>

<script>
import HeaderSickbed from '../components/HeaderSickbed'
import SectionSickbed from '../components/SectionSickbed'
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.css';
import '../assets/css/jquery.fancybox.css';
import '../assets/css/animate.css';
import '../assets/css/styleTable.css';
export default {
    
    name: 'Sickbed',
    props:['user'],
    components:{
        HeaderSickbed,
        SectionSickbed
    },
    data(){
        return {
            status : ''
        }
    }

    
}
</script>


<style scoped>
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>