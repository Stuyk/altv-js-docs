---
layout: page
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const template = {
    avatar: 'https://i.imgur.com/WabAzu5.png',
    name: 'Some Person',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/stuyk' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }


const members = () => {
    let templateMembers = [];

    for(let i = 0; i < 12; i++) {
        templateMembers.push(template);
    }

    return templateMembers;
}
</script>

<VPTeamPage>
  <VPTeamMembers size="small" style="margin-top: 48px; margin-left: 48px; margin-right: 48px" :members="members()"/>
</VPTeamPage>