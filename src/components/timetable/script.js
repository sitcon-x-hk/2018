import { mapState } from 'vuex';

export default {
  computed: {
    linkTarget() {
      return this.online ? '_blank' : '_self';
    },
    ...mapState(['online']),
  },
  data() {
    return {
      sessions: [
        {
          issue: 'Registration',
          time: '1000 - 1045',
        },
        { divider: true },
        {
          issue: 'Opening Ceremony',
          time: '1045 - 1115',
        },
        { divider: true },
        {
          time: '1115 - 1215',
          issue: 'Turning "Likes" into Reward by LikeCoin',
          speaker: 'LikeCoin',
          live: 'https://www.youtube.com/watch?v=fUgusBwYKLE',
          icon: 'https://i.ytimg.com/vi/fUgusBwYKLE/0.jpg?cache_busting=1',
        },
        { divider: true },
        {
          time: '1230 - 1330',
          issue: ' 3D Computer Animation Crash Course',
          speaker: 'Ann Leung',
          live: 'https://www.youtube.com/watch?v=-yvoceBIBkw',
          icon: 'https://i.ytimg.com/vi/-yvoceBIBkw/hqdefault_live.jpg?sqp=CPSBvN0F-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&cache_busting=1',
        },
        {
          time: '1230 - 1330',
          issue: 'What is IT?',
          speaker: 'Wong Wan Leung',
          live: 'https://www.youtube.com/watch?v=a8l-714pz3Y',
          icon: 'https://i.ytimg.com/vi/a8l-714pz3Y/hqdefault_live.jpg?cache_busting=1',
        },
        { divider: true },
        {
          issue: 'Lunch Break',
          time: '1330 - 1400',
        },
        { divider: true },
        {
          time: '1400 - 1500',
          issue: 'Deploying Web Application With Docker',
          speaker: 'Wong Ho Wa',
          live: 'https://www.youtube.com/watch?v=zvuz2wla15g',
          icon: 'https://i.ytimg.com/vi/zvuz2wla15g/hqdefault_live.jpg',
        },
        {
          time: '1400 - 1500',
          issue: 'GraphQL: The Introduction to The Future',
          speaker: 'Steve Fan',
          live: 'https://www.youtube.com/watch?v=qWV_OBLB1tI',
          icon: 'https://i.ytimg.com/vi/qWV_OBLB1tI/hqdefault_live.jpg',
        },
        { divider: true },
        {
          time: '1500 - 1600',
          issue: 'Building Anime Scene Search Engine with Open-source Software',
          speaker: 'そるり',
        },
        {
          time: '1500 - 1600',
          issue: 'Git: Time Machine for your Source Code',
          speakeer: 'Koala Yueng',
        },
        { divider: true },
        {
          time: '1600 - 1700',
          issue: 'Libre Silicon:  Free as in freedom silicon',
          speaker: 'David Lanzendörfer',
        },
        {
          time: '1600 - 1700',
          issue: 'Apps Development with Ionic and NativeScript',
          speaker: 'Dave Fung\nApps Resource Centre, Hong Kong Baptist University',
        },
        { divider: true },
        {
          issue: 'Lightning Talk',
          time: '1700 - 1745',
        },
        { divider: true },
        {
          issue: 'Closing Ceremony',
          time: '1745 - 1800',
        },
      ],
    };
  },
};
