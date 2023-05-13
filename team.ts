import { StaticImageData } from "next/image";
import Image from "next/image";
//import c from "";
//import sample from "";


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

const sample1: StaticImageData = require('./public/images/1.jpg')
const sample2: StaticImageData = require('./public/images/2.png')
const sample2a: StaticImageData = require('./public/images/2a.jpeg')
const sample3: StaticImageData = require('./public/images/3.jpg')
const sample4: StaticImageData = require('./public/images/4.jpg')
const sample5: StaticImageData = require('./public/images/5.jpg')
const sample6: StaticImageData = require('./public/images/6.jpg')
const sample7: StaticImageData = require('./public/images/7.jpg')
const sample7a: StaticImageData = require('./public/images/7a.jpeg')
const sample7b: StaticImageData = require('./public/images/7b.JPG')

const sample8: StaticImageData = require('./public/images/8.png')
const sample9: StaticImageData = require('./public/images/9.jpeg')
const sample10: StaticImageData = require('./public/images/10.jpg')
const sample11: StaticImageData = require('./public/images/11.jpg')
const sample12: StaticImageData = require('./public/images/12.jpg')
const sample13: StaticImageData = require('./public/images/13.jpg')
const sample14: StaticImageData = require('./public/images/14.jpg')
const sample15: StaticImageData = require('./public/images/15.jpg')
const sample16: StaticImageData = require('./public/images/16.jpg')
const sample17: StaticImageData = require('./public/images/17.jpeg')


export const currentmembers:currentmemberInfo[] = [
  {
    name: 'Aakash Kumar',
    facebook: 'https://facebook.com',
    image : sample1,
    post: 'Deputy Editor (Hindi)',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/aakash-kumar-79813a185',
    insta: 'https://www.instagram.com/skyastronomical/',
  },
  {
    name: 'Devang Vatsa',
    facebook: 'https://facebook.com',
    image: sample2,
    post: 'Treasurer',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/devang-vatsa-503015201',
    insta: 'https://instagram.com/devang02_12?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Ritika',
    facebook: 'https://facebook.com',
    image: sample2a,
    post: 'Joint Secretary ',
    year: '2020',
    linkedin: 'http://www.linkedin.com/in/itsritika11',
    insta: 'https://instagram.com/ritika.1211?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Diya Mondal',
    facebook: 'https://facebook.com',
    image: sample3,
    post: 'Epistle Head',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com/roseredfingers?igshid=ZDdkNTZiNTM=',
  },
  {
    name: 'Abhinav Pratham ',
    facebook: 'https://facebook.com',
    image: sample4,
    post: 'Media Coordinator ',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/abhinav-pratham-815076214',
    insta: 'https://instagram.com/abhi_p.19?igshid=ZDdkNTZiNTM=',
  },
  {
    name: 'Asad', 
    facebook: 'https://facebook.com',
    image: sample5,
    post: 'Documentation Coordinator ',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/asad-yousuf',
    insta: 'https://www.instagram.com/_asad_1729/',
  },
  {
    name: 'Akash Rupam Ekka ',
    facebook: 'https://facebook.com',
    image: sample6,
    post: 'Interviews coordinator ',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com/akashrupam_6102?igshid=ZDdkNTZiNTM=',
  },
  
  {
    name: 'Rituraj Seal',
    facebook: 'https://facebook.com',
    image: sample7,
    post: 'Technical coordinator',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/rituraj-seal-48a8031bb/',
    insta: 'https://www.instagram.com/rituraj_rs/',
  },
  {
    name: 'Lohitaksha Malhotra',
    facebook: 'https://facebook.com',
    image: sample7a,
    post: 'Web Developer',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/lohitaksha-malhotra-b84392201',
    insta: 'https://instagram.com/lohitakshamalhotra?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Ishan Pandey ',
    facebook: 'https://facebook.com',
    image: sample7b,
    post: 'Web Developer',
    year: '2020',
    linkedin: 'https://www.linkedin.com/in/ishan-pandey-15527717b',
    insta: 'https://instagram.com/ishan__pandey_?igshid=ZGUzMzM3NWJiOQ==',
  },
  {
    name: 'Ujjawal Kumar',
    facebook: 'https://www.facebook.com/FeelinglessssSssss.Raj',
    image: sample8,
    post: 'Web Developer',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/ujjawal-kumar-7a6ba2226/',
    insta: 'https://www.instagram.com/feelingless_ujjawal/',
  },
  {
    name: 'Shashwat Jha',
    facebook: 'https://www.facebook.com/shashwat.jha.169',
    image: sample9,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/shashwatjha951',
    insta: 'https://www.instagram.com/saucewhat_/',
  },
  {
    name: 'Kingshuk Banerjee',
    facebook: 'https://facebook.com',
    image: sample10,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/kingshuk-banerjee-',
    insta: 'https://instagram.com/the_thinking_banerjee?igshid=ZDdkNTZiNTM=',
  },
  {
    name: 'Khushi',
    facebook: 'https://facebook.com',
    image: sample11,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/_khushix_12/',
  },
  {
    name: 'Nikhil Anand',
    facebook: 'https://facebook.com',
    image: sample12,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/nikhil_anand02/',
  },
  {
    name: 'Priyanka Sinha',
    facebook: 'https://facebook.com',
    image: sample13,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/',
    insta: 'https://instagram.com/notwhenitsyou?igshid=ZDdkNTZiNTM=',
  },
  {
    name: 'Sumeet Kumar ',
    facebook: 'https://facebook.com',
    image: sample14,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/sumeet-kumar-84b9b0230/',
    insta: 'https://www.instagram.com/su.meet_ks/',
  },
  

  {
    name: 'Ayush Kumar',
    facebook: 'https://facebook.com',
    image: sample15,
    post: 'Editor',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/ayushsinghhrcc-1b22751b7',
    insta: 'https://instagram.com/ayush_singh6300?igshid=ZDdkNTZiNTM=',
  },
  {
    name: 'Harsh Tejasvi',
    facebook: 'https://facebook.com',
    image: sample16,
    post: 'English Reporter and Poster Designer',
    year: '2021',
    linkedin: 'https://in.linkedin.com/in/harsh-tejasvi-34237b229',
    insta: 'https://instagram.com/harsh_tejasvi?igshid=ZDdkNTZiNTM=',
  },



  {
    name: 'Aditya Dubey ',
    facebook: 'https://facebook.com',
    image: sample17,
    post: 'Reporter',
    year: '2021',
    linkedin: 'https://www.linkedin.com/in/aditya-dubey-832391232/',
    insta: 'https://www.instagram.com/flu0.resent/',
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