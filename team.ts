import { StaticImageData } from "next/image"

type pastmemberInfo = {
  [key: string]: {
    name: string,
    post: string,
    linkedin: string
  }[]
}

type currentmemberInfo = {
  name: string
  post: string
  year: string
  image: string | StaticImageData
  facebook?: string
  insta?: string
  linkedin?: string
}

const sample = "https://images.unsplash.com/photo-1654789460791-74c79093c37e"
export const currentmembers:currentmemberInfo[] = [
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
]

export const pastmembers:pastmemberInfo={
  "2019-2020":[
  {
    name: 'Member From 2019',
    post: 'Designation 1',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2019',
    post: 'Designation 2',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2019',
    post: 'Designation 3',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2019',
    post: 'Designation 4',
    linkedin: 'https://linkedin.com',
  },
],
  "2018-2019":[
  {
    name: 'Member From 2018',
    post: 'Designation 1',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 2',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 3',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 4',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 5',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 6',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member From 2018',
    post: 'Designation 7',
    linkedin: 'https://linkedin.com',
  },
]
}