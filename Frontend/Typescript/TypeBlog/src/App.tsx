import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import DetailedBlog from './components/DetailedBlog'

export type blogs = {
    id: number
    blogTitle: string
    blogCategory: string[]
    authorName: string
    authorImageUrl: string
    publishedDate: string
    blogImageUrl: string
    blogContent: string
}

const blogsData: blogs[] = [
    {
        id: 1,
        blogTitle: 'The Future of AI in Everyday Life',
        blogCategory: ['Technology', 'Innovation'],
        authorName: 'John Doe',
        authorImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        publishedDate: '2024-09-15',
        blogImageUrl:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo lectus id justo fermentum interdum.
                  Fusce in tortor vitae velit bibendum blandit ut non libero. Phasellus sed lorem dui. Ut eu ligula malesuada,
                  eleifend ipsum ac, ullamcorper sem. Nullam sit amet fermentum velit, id consequat ligula. Maecenas suscipit
                  orci vitae nulla congue suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                  cubilia curae; Cras ultricies volutpat diam, at hendrerit nisl sollicitudin ut. Pellentesque habitant morbi 
                  tristique senectus et netus et malesuada fames ac turpis egestas. Mauris bibendum lacus ut risus ultrices
                  dapibus. Integer gravida, sapien eget convallis ultricies, odio eros commodo lorem, et porta ante justo ac eros.
                  Aenean lacinia ex id dolor cursus tincidunt. Suspendisse suscipit tincidunt est, eget convallis urna aliquam a. 
                  Nulla facilisi. Phasellus tincidunt purus in nunc viverra vehicula. Vestibulum scelerisque mollis nulla.
                  Donec auctor felis at quam suscipit, ac consectetur urna eleifend. Nulla accumsan nisi vel tincidunt vehicula.
                  Maecenas tempor sem ac magna congue viverra. Donec gravida nulla a venenatis varius. In vehicula vehicula justo, 
                  a vehicula purus. Cras quis felis vehicula, rutrum orci non, convallis nulla. Duis sollicitudin velit eget eros 
                  hendrerit, at convallis elit cursus. Etiam eu lacinia sapien, ac volutpat risus. Nullam vestibulum accumsan nibh, 
                  ut interdum metus interdum id. Curabitur efficitur urna id ex vulputate, a ullamcorper erat gravida. Fusce et 
                  enim felis. Integer fermentum justo ut massa volutpat, ac cursus mi efficitur. Nam ultricies lectus a ex tempor 
                  gravida. Nullam posuere, magna in tincidunt vestibulum, leo nunc maximus elit, sit amet lacinia nulla mauris sit 
                  amet justo. Quisque vitae aliquet turpis, a auctor risus. Praesent tincidunt scelerisque lorem nec tincidunt. 
                  Curabitur vitae dui risus. Donec sit amet magna turpis. Cras varius diam quis massa ultrices, ac sollicitudin justo 
                  aliquet. In euismod, lorem id vestibulum gravida, felis magna accumsan ex, at facilisis odio quam ac libero. 
                  Suspendisse ullamcorper dolor vitae dolor consequat consectetur. Praesent at urna venenatis orci ornare ullamcorper.`,
    },
    {
        id: 2,
        blogTitle: 'Top 10 Healthy Living Tips',
        blogCategory: ['Lifestyle', 'Health'],
        authorName: 'Jane Smith',
        authorImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        publishedDate: '2024-09-12',
        blogImageUrl:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo.`,
    },
    {
        id: 3,
        blogTitle: 'The Rise of Electric Vehicles',
        blogCategory: ['Technology', 'Automotive'],
        authorName: 'David Green',
        authorImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        publishedDate: '2024-08-30',
        blogImageUrl:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 4,
        blogTitle: 'Mastering Mindfulness in Daily Life',
        blogCategory: ['Lifestyle', 'Mental Health'],
        authorName: 'Alice Johnson',
        authorImageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
        publishedDate: '2024-09-10',
        blogImageUrl:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 5,
        blogTitle: 'Exploring the Latest Web Development Trends',
        blogCategory: ['Technology', 'Web Development'],
        authorName: 'Michael Brown',
        authorImageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
        publishedDate: '2024-07-25',
        blogImageUrl:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 6,
        blogTitle: '10 Easy Recipes for a Healthy Diet',
        blogCategory: ['Lifestyle', 'Food'],
        authorName: 'Emily White',
        authorImageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
        publishedDate: '2024-08-05',
        blogImageUrl:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 7,
        blogTitle: 'Traveling the World on a Budget',
        blogCategory: ['Travel', 'Lifestyle'],
        authorName: 'Chris Johnson',
        authorImageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
        publishedDate: '2024-06-20',
        blogImageUrl:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 8,
        blogTitle: 'Fitness Routines for Busy Professionals',
        blogCategory: ['Health', 'Fitness'],
        authorName: 'Samantha Lee',
        authorImageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
        publishedDate: '2024-09-05',
        blogImageUrl:
            'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 9,
        blogTitle: 'The Impact of Climate Change on Wildlife',
        blogCategory: ['Environment', 'Science'],
        authorName: 'Robert Evans',
        authorImageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
        publishedDate: '2024-07-15',
        blogImageUrl:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
    {
        id: 10,
        blogTitle: 'Home Décor Tips for a Modern Look',
        blogCategory: ['Lifestyle', 'Home Improvement'],
        authorName: 'Jessica Hall',
        authorImageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
        publishedDate: '2024-08-12',
        blogImageUrl:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        blogContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at turpis a lacus posuere tincidunt.
                  Curabitur consectetur turpis in arcu lobortis, sed tincidunt odio tincidunt. Donec ac quam suscipit, ultricies 
                  metus ac, pellentesque lorem. Nam ac gravida magna, non posuere lacus. Duis euismod felis ut ex tristique, 
                  nec lobortis justo posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque, ac vestibulum sapien vestibulum 
                  ac. Quisque tristique scelerisque augue, vitae varius quam sodales eget. Cras quis eros orci. In facilisis enim id 
                  libero varius consectetur. Donec pharetra fringilla felis. Sed viverra dolor id tellus fringilla egestas. 
                  Phasellus ultricies lacus vitae enim porttitor, id sollicitudin orci aliquam. Integer feugiat nulla vitae metus 
                  faucibus, vitae tincidunt enim vestibulum. Donec cursus mauris quis magna gravida viverra. Etiam sed nisl libero.
                  Pellentesque quis enim sed purus condimentum luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur arcu 
                  volutpat. Cras fringilla metus in feugiat efficitur. Ut et lectus auctor, interdum est et, bibendum eros.
                  Vestibulum pharetra nisl vel ligula ultricies fermentum. Curabitur sit amet sapien ac augue porttitor auctor. 
                  Integer sodales metus ac ipsum viverra pharetra. Proin tempor justo vel arcu egestas laoreet. Suspendisse gravida, 
                  tortor id lobortis scelerisque, nulla nisi interdum tortor, at laoreet sem nisi a lacus. Proin hendrerit aliquet 
                  ex non egestas. Nulla sit amet tortor a mi ultrices bibendum. Sed dictum justo nec nisl sollicitudin fermentum. 
                  Etiam feugiat, tortor id malesuada iaculis, erat odio consectetur ipsum, at fermentum nisl nisi sed ex. Praesent 
                  vestibulum sapien quis tempor lobortis. Integer et leo sed purus congue consectetur vel at ipsum. Nulla ac 
                  condimentum nibh. Pellentesque non odio vel arcu auctor dignissim. Donec sed felis nisi. Duis vehicula pretium leo, 
                  vitae sollicitudin nisi facilisis id. Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet est vitae mauris 
                  facilisis ultrices. Sed scelerisque ornare justo, ut aliquet neque condimentum vitae. Maecenas nec vehicula justo. 
                  Vestibulum congue auctor eros, ut ullamcorper metus. Pellentesque sed tincidunt dui. Vestibulum in mi ut dolor 
                  elementum suscipit non at sapien. Nulla et tincidunt nisi. Curabitur faucibus, justo vel vestibulum rutrum, turpis 
                  lacus tincidunt est, eget venenatis mauris metus eget leo`,
    },
]

const App = () => {
    return (
        <div className='flex flex-col justify-start items-center'>
            <NavBar />

            <div className='w-11/12 md:w-9/12'>
                <Routes>
                    <Route path='/' element={<Home blogsList={blogsData} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route
                        path='/blog/:id'
                        element={<DetailedBlog blogsList={blogsData} />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App
