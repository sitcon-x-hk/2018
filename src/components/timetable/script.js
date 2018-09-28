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
          time: '1000 - 1030',
        },
        { divider: true },
        {
          issue: 'Opening Ceremony',
          time: '1030 - 1100',
        },
        { divider: true },
        {
          time: '1100 - 1200',
          title: 'Turning "Likes" into Reward by LikeCoin',
          speaker: 'LikeCoin',
        },
        { divider: true },
        {
          time: '1200 - 1300',
          title: ' 3D Computer Animation Crash Course',
          speaker: 'Ann Leung',
        },
        {
          time: '1200 - 1300',
          title: 'What is IT?',
          speaker: 'Wong Wan Leung',
        },
        { divider: true },
        {
          issue: 'Lunch Break',
          time: '1300 - 1400',
        },
        { divider: true },
        {
          time: '1400 - 1500',
          issue: 'Deploying Web Application With Docker',
          speaker: 'Wong Ho Wa',
        },
        {
          time: '1400 - 1500',
          issue: 'GraphQL: The Introduction to The Future',
          speaker: 'Steve Fan',
        },
        { divider: true },
        {
          time: '1500 - 1600',
          issue: 'Building Anime Scene Search Engine with Open-source Software',
          speaker: 'そるり'
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
