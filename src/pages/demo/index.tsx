// // 代码目录： src/index/index
// import {connect} from 'react-redux';
// import type {indexModel} from "./models";
// import type {DvaDispatch} from "@/type";

// const Index: React.FunctionComponent<{
//     dispatch: DvaDispatch
// }> = ({ dispatch }) => {

//     const testDispatch = () => dispatch<indexModel>({
//         type: 'index/updateState'
//     })

//     return (
//         <View>
//             <Text onClick={testDispatch}>点我无事发生</Text>
//         </View>
//     )
// }

// const mapStateToProps = (state: allModel) => {
//     return { //... }
// }
// export default connect(mapStateToProps)(Index)
