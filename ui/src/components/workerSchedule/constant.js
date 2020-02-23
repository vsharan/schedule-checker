export const columns = [
  {
    width: 400,
    label: "userId",
    dataKey: "userId"
  },
  {
    width: 400,
    label: "Username",
    dataKey: "username"
  },
  {
    width: 400,
    label: "Start Time",
    dataKey: "startTime"
  },
  {
    width: 400,
    label: "End Time",
    dataKey: "endTime"
  },
  {
    width: 400,
    label: "Action",
    dataKey: "delete"
  }
];

const sample = [
  ["Frozen yoghurt", 159, 6.0, 24, 4.0],
  ["Ice cream sandwich", 237, 9.0, 37, 4.3],
  ["Eclair", 262, 16.0, 24, 6.0],
  ["Cupcake", 305, 3.7, 67, 4.3],
  ["Gingerbread", 356, 16.0, 49, 3.9]
];

function createData(userId, username, startTime, endTime, carbs, protein) {
  return { userId, username, startTime, endTime, carbs, protein };
}

export const rowData =[
    {
        userId : 1,
        username:"Frozen yoghurt",
        startTime: 237, 
        endTime:9.0
    },
    {
        userId : 2,
        username:"Ice cream sandwich",
        startTime: 159, 
        endTime:9.0
    },
    {
        userId : 3,
        username:"Eclair",
        startTime: 159, 
        endTime:9.0
    },
    {
        userId : 4,
        username:"Cupcake",
        startTime: 159, 
        endTime:9.0
    },
    {
        userId : 5,
        username:"Gingerbread",
        startTime: 369, 
        endTime:9.0
    }
]
