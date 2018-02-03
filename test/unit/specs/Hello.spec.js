import Vue from 'vue'
import Content from '@/components/Content'

describe('Content.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Content)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.content h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA')
  })
})
