const appointments = [
    {
      id: 1,
      duration: '30 minutes',
      start: new Date(2024, 4, 9, 10, 0),
      end: new Date(2024, 4, 9, 10, 30),
      customData: {
        name: 'Zoe',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuMrxuwzt4x95v1iYMugb9V5bcPKObVeMHQiEbuRl1weI2qJtehmiwvmHQpr7aADclhw&usqp=CAU',
        taskType: 'deskEvent',
        partner:  'anyonePartner'
      }
    },
    {
      id: 2,
      duration: '50 minutes',
      start: new Date(2024, 4, 10, 12, 0),
      end: new Date(2024, 4, 10, 12, 20),
      customData: {
        name: 'David',
        profilePic: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
        taskType: 'deskEvent',
        partner:  'anyonePartner'
      }
    },
    {
      id: 3,
      duration: '50 minutes',
      start: new Date(2024, 4, 8, 14, 0),
      end: new Date(2024, 4, 8, 14, 20),
      customData: {
        name: 'Nicole',
        profilePic: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
        taskType: 'movingEvent',
        partner:  'favoritePartner'
      }
    },
    {
      id: 4,
      duration: '50 minutes',
      start: new Date(2024, 4, 9, 16, 0),
      end: new Date(2024, 4, 9, 16, 20),
      customData: {
        name: 'Claire',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuMrxuwzt4x95v1iYMugb9V5bcPKObVeMHQiEbuRl1weI2qJtehmiwvmHQpr7aADclhw&usqp=CAU',
        taskType: 'anythingEvent',
        partner:  'anyonePartner'
      }
    },
    {
      id: 5,
      duration: '50 minutes',
      start: new Date(2024, 4, 9, 8, 0),
      end: new Date(2024, 4, 9, 8, 20),
      customData: {
        name: 'Chris',
        profilePic: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
        taskType: 'deskEvent',
        partner:  'favoritePartner'
      }
    },
    {
      id: 6,
      duration: '30 minutes',
      start: new Date(2024, 4, 10, 9, 0),
      end: new Date(2024, 4, 10, 9, 30),
      customData: {
        name: 'Marissa',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuMrxuwzt4x95v1iYMugb9V5bcPKObVeMHQiEbuRl1weI2qJtehmiwvmHQpr7aADclhw&usqp=CAU',
        taskType: 'deskEvent',
        partner:  'anyonePartner'
      }
    },
    // {
    //   id: 7,
    //   duration: '30 minutes',
    //   start: new Date(2024, 4, 10, 16, 0),
    //   end: new Date(2024, 4, 10, 16, 30),
    //   customData: {
    //     name: 'Rupesh C',
    //     profilePic: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
    //     taskType: 'deskEvent',
    //     partner:  'anyonePartner'
    //   }
    // },
    // {
    //   id: 8,
    //   duration: '50 minutes',
    //   start: new Date(2024, 4, 11, 11, 0),
    //   end: new Date(2024, 4, 11, 11, 50),
    //   customData: {
    //     name: 'Rupesh C',
    //     profilePic: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
    //     taskType: 'movingEvent',
    //     partner:  'anyonePartner'
    //   }
    // },
    // Add more events as needed
  ];

  export {appointments};