import { StaticImageData } from "next/image"

type pastmemberInfo = {
  name: string
  post: string
  year: string
  linkedin: string
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

export const pastmembers:pastmemberInfo[]=[
  {
    name: 'Member Name',
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member Name',
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member Name',
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Member Name',
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
  },
]