<template>
    <div>
        <PostsListaIten
            v-for="post in posts"
            :key="post.id"
            :post="post">
            <slot :meuPost="post"></slot>    
        </PostsListaIten>
    </div>    
</template>

<script>

import PostsListaIten from './PostsListaIten.vue'

export default {
    components: {
        PostsListaIten
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
