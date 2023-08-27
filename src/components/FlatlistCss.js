import { StyleSheet } from "react-native";
var FlatListStyles = StyleSheet.create({
  CardTitle: {
    fontSize: 18,
    color: "gray",
    fontWeight: "normal",
    marginTop: 10,
    marginBottom: 10,

  },
  CardSubTitle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
    marginBottom: 4,
    
  },
  CompoInItems: {
    flex: 1,
    justifyContent: "flex-start",
    width: "50%",
    padding: 3,
  },
  ButtonCompoStyle: {
    // borderRadius: 20,
    // backgroundColor: "#00669B",
    width: "80%",
    borderRadius: 20,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
  },
  ButtonCompoLabelStyle: {
    // fontSize: 12,
    // color: "#fff",
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
  },
  TouchableOpactityStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    padding: 7,
    backgroundColor: "#00669B",
  },
  TouchableOpactityTextStyle: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
  },
  CardAmtStyle: {
    fontSize: 16,
    color: "#3c8f33",
    fontWeight: "700",
  },
  container1: {
    // width: "100%",
    flex: 1,
    // paddingLeft: 10,
  },
  maincontainer: {
    width: "100%",
    // flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  fab: {
    position: "absolute",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#00669B",
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 20,
    color: "white",
  },
  card: {
    borderRadius: 8,
    padding: 12,
    marginVertical: 4,
    width: "100%",
    backgroundColor: "#fff",

    
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    
    justifyContent: 'center',

  },
  itemCard: {
    borderBottomWidth: 1,
    borderColor: "#E7E7E7",
        // padding: 15,
    // marginVertical: 5,
    width: "100%",
    backgroundColor: "#fff",
    
  },
  containerCategory: {
    marginHorizontal: 10,
    marginVertical: 2,
     width:'45%',
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 2,
    // width:'50%',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginBtn: {
    width: "100%",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    color: "#FFFFFF",
    // backgroundColor: "#33ccff",
  },
  loginBtnNext: {
    width: "20%",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    color: "#FFFFFF",
    // backgroundColor: "#33ccff",
  },
  loginBtnSubmit: {
    width: "90%",
    borderRadius: 8,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "#FFFFFF",
    // backgroundColor: "#33ccff",
  },
  inputView: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 2,
  },
  inputView1: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
  innerContainer: {
    padding: 5,
    marginTop: 10,
  },
  loginInputView: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 5,
  },

  loginImage: {
    marginBottom: 40,
    alignSelf: "center",
  },
  TextInput: {
    flex: 1,
    // width: 320,
    height: 52,
    backgroundColor: "#ffffff",
    // borderWidth: 1,
    // borderColor: "#495256",
    borderRadius: 4,
    textColor: "#A3A3A3",
  },
  camera: {
    flex: 1,
    
   
  },
  buttonCancleContainer: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    // margin: 64,
  },
  buttonCancel: {
    // flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    alignSelf: "center",
    alignItems: "center",
  },
  button: {
    // flex: 0.5,
    alignSelf: "flex-end",
    alignItems: "center",
    // backgroundColor: "black",
    // alignContent: "center",
  },
  // container: {
  //   flex: 1,
  //   padding: 16,
  //   backgroundColor: "#F5FCFF",
  // },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
  },
  itemName: {
    color:"#000000",
    // flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescription: {
    color:"#000000",
    // flex: 1,
    fontSize: 12,
    fontWeight: "300",
  },
  itemPrice: {
    color:"#000000",
    fontSize: 14,
    marginRight: 10,
    fontWeight: "600",
  },
  quantityMain: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "baseline",
    backgroundColor: "#ADD8E6",
    // padding: 5,
    borderWidth: 1,
    borderColor: "#00669B",
    borderRadius: 5,
  },
  quantityContainer: {
    // flexDirection: "row",
    // alignSelf: "flex-end",
    // alignItems: "baseline",
    // backgroundColor: "#ADD8E6",
    padding: 5,
    // borderWidth: 1,
    // borderColor: "#00669B",
    // borderRadius: 5,
  },
  itemQuantity: {
    fontSize: 14,

    color: "#fff",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default FlatListStyles;
