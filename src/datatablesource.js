export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://randomwordgenerator.com/img/picture-generator/sebastiaan-stam-XbZkCaminOY-unsplash.jpg",
    email: "sarbeswarmajhiias@airmo.net",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://randomwordgenerator.com/img/picture-generator/55e9dc4a4851ae14f1dc8460962e33791c3ad6e04e50744172287ad29e44c4_640.jpg",
    email: "bngc@jidanshoppu.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://randomwordgenerator.com/img/picture-generator/54e6d5404a55b10ff3d8992cc12c30771037dbf85257714d702672d69548_640.jpg",
    email: "bngc@dmailx.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "crosisomega@gmailni.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://randomwordgenerator.com/img/picture-generator/53e4d246495bad14f1dc8460962e33791c3ad6e04e507440722d72d5954ac1_640.jpg",
    email: "fatkid85@boranora.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://randomwordgenerator.com/img/picture-generator/53e3d7464e53a414f1dc8460962e33791c3ad6e04e507440762a7cd19049cd_640.jpg",
    email: "bigtorent@inkashop.org",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://randomwordgenerator.com/img/picture-generator/57e2d1464d56a414f1dc8460962e33791c3ad6e04e50744172287cd19649c5_640.jpg",
    email: "disapo49@goldinbox.net",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://randomwordgenerator.com/img/picture-generator/55e0d3414a51a814f1dc8460962e33791c3ad6e04e507440702d79d3944ecd_640.jpg",
    email: "bryanyoon@inkashop.org",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.unsplash.com/photo-1672709842636-1dd09e63c0f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Mzk2MDUzMg&ixlib=rb-4.0.3&q=80&w=300",
    email: "pivpiv@hcaptcha.site",
    status: "active",
    age: 65,
  },
];
 