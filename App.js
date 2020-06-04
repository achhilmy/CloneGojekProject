import React, {Component} from 'react';
import{Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature' //react secara default memanggil index.js
import MainFeature from './src/components/molecules/MainFeature/index.js';


export default class App extends Component{
  render(){
    return ( 
      <View style = {{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor:'white'}}> 
          {/* search bar */}
            <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
                <View style={{position: 'relative', flex: 1}}>
                  <TextInput placeholder="what do you want to eat? " style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height:  40, fontSize: 14, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight:18 }}/>
                  <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top: 5, left: 12}}></Image>
                </View>            
                <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('./src/assets//icon/promo.png')}/>
                </View>
            </View>
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 14}}>
              <Image source={require('./src/assets/icon/gopay.png')}></Image>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomRightRadius: 4, borderBottomLeftRadius: 4}}>
              <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')} />
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />        
            </View>            
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <MainFeature />
              <MainFeature />
              <MainFeature />
              <MainFeature />
              <MainFeature />
              <MainFeature />
              <MainFeature />
              <MainFeature />   
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-car.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Car</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                 <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                   <Image source={require('./src/assets/icon/go-bluebird.png')} />
                 </View>
                 <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Bluebird</Text>         
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                 <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./src/assets/icon/go-send.png')} />
                 </View>
                 <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Send</Text>                
              </View>              
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                   <Image source={require('./src/assets/icon/go-deals.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Deals</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                   <Image source={require('./src/assets/icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Pulsa</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                 <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./src/assets/icon/go-food.png')} />
                 </View>
                 <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Food</Text>         
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                 <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18,  justifyContent: 'center', alignItems: 'center'}}>
                   <Image source={require('./src/assets/icon/go-more.png')} />
                 </View>
                 <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-More</Text>                
              </View>     
            </View>    
            </View>
            <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
            {/** news section */}
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
              <View style={{position: 'relative'}}>
                <Image source={require('./src/assets/dummy/ayah.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2}}></View>                
                <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
                </View>
              </View>
              <View style={{paddingTop: 16,paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
                <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dimas Drajat Selmatkan Penalti, Timnas Menang besar atas korea </Text>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>            
            {/*Internal Information Section */}
            <View style= {{padding: 16, paddingBottom: 0}}>
              <View style={{height: 15, width: 60, marginBottom: 15}}>
                <Image source={require('./src/assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}/>
              </View>
              <Text source={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
              <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 16}}>
                <View>
                  <Image source={require('./src/assets/dummy/facebook-connect.png')}/>                 
                </View>
                <View style={{marginLeft: 16, flex: 1}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>Connect with Facebook</Text>
                  <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%'}}>Login faster without verification code</Text>
                </View>
              </View>
              <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Connect</Text>
                </TouchableOpacity>
                <View style={{paddingBottom: 20, marginTop: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}></View>
            </View>
            {/* Go Food banner section */}
            <View style={{padding: 16}}>
              <View style={{position: 'relative'}}>
                <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
                <View style={{borderRadius:6, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15}}></View>
                <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                  <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
                </View>
                <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                  <View  >
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}> Free Go-Food Voucher</Text>
                    <Text  style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, Before they run out !</Text>
                  </View>
                  <View style={{flex: 1, paddingLeft: 12}}>
                    <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                     <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Get Voucher</Text>
                     </TouchableOpacity>
                  </View>
                </View>
              </View>
           
              <View style={{paddingBottom: 20, marginTop: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}></View>
           
            </View>
            {/** Nearby Go-Food */}
            <View>
              <View style={{height: 15, width: 60, marginLeft: 18}}>
                <Image source={require('./src/assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 14}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}> Nearby Restaurant</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#51A756'}}>See All</Text>
              </View>
              <ScrollView horizontal={true} style={{flexDirection: 'row', marginLeft: 16}}>
                <View style={{ marginRight: 16}}>
                  <View style={{width: 150, heigh: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{borderRadius: 8, width: undefined, height: 150, resizeMode: 'cover', flex: 1 }}/>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Sederhana Minang</Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View style={{width: 150, heigh: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{borderRadius: 8, width: undefined, height: 150, resizeMode: 'cover', flex: 1 }}/>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Kfc Aeon Mall</Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View style={{width: 150, heigh: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                    <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{borderRadius: 8, width: undefined, height: 150, resizeMode: 'cover', flex: 1 }}/>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Bakmi GM Aeon Mall</Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View style={{width: 150, heigh: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{borderRadius: 8, width: undefined, height: 150, resizeMode: 'cover', flex: 1 }}/>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Martabak Orins</Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View style={{width: 150, heigh: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{borderRadius: 8, width: undefined, height: 150, resizeMode: 'cover', flex: 1 }}/>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Sederhana Minang</Text>
                </View>
              </ScrollView>
              <View style={{paddingBottom: 20, marginTop: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20, marginBottom: 20}}></View>
            </View>
        </ScrollView>                
        <View style= {{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/home-active.png')}></Image>            
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/order.png')}></Image>       
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/help.png')}></Image>       
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/inbox.png')}></Image>     
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/account.png')}></Image>     
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style= StyleSheet.create({
 
})