const Dashboard = () => {
  return (
    <div>Dashboard</div>
  );
};

export default Dashboard;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const token = req.cookies.jToken;

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {}
//   }
// }