import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Header, 
    Left, 
    Body, 
    Title, 
    Subtitle, 
    Right,
    Card,
    CardItem,
    Text,
    Item,
    Picker
} from 'react-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <left/>
                    <Body>
                        <Title>Kapalzy/Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Pelabuhan Awal</Text>
                        </CardItem>
                    <CardItem>
                        <Body>
                            <Item picker>
                                <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Pelabuhan Awal"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                               <Picker.Item label="Lampung Bakauheni" value="key0"/>
                               <Picker.Item label="Lampung Bakauheni" value="key1"/>
                               <Picker.Item label="Lampung Bakauheni" value="key2"/>
                               <Picker.Item label="Lampung Bakauheni" value="key3"/>
                               <Picker.Item label="Lampung Bakauheni" value="key4"/>
                               </Picker>
                            </Item>
                            <Item picker style={{marginTop:15}}>
                            <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Pelabuhan Awal"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                              <Picker.Item label="Lampung Bakauheni" value="key0"/>
                               <Picker.Item label="Lampung Bakauheni" value="key1"/>
                               <Picker.Item label="Lampung Bakauheni" value="key2"/>
                               <Picker.Item label="Lampung Bakauheni" value="key3"/>
                               <Picker.Item label="Lampung Bakauheni" value="key4"/>
                               </Picker>
                            </Item>
                        </Body>
                    </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>Pelabuhan Tujuan</Text>
                        </CardItem>
                    <CardItem>
                        <Body>
                            <Item picker>
                                <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Pelabuhan Tujuan"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                               <Picker.Item label="Lampung Bakauheni" value="key0"/>
                               <Picker.Item label="Lampung Bakauheni" value="key1"/>
                               <Picker.Item label="Lampung Bakauheni" value="key2"/>
                               <Picker.Item label="Lampung Bakauheni" value="key3"/>
                               <Picker.Item label="Lampung Bakauheni" value="key4"/>
                               </Picker>
                            </Item>
                            <Item picker style={{marginTop:15}}>
                            <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Pelabuhan Tujuan"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                              <Picker.Item label="Lampung Bakauheni" value="key0"/>
                               <Picker.Item label="Lampung Bakauheni" value="key1"/>
                               <Picker.Item label="Lampung Bakauheni" value="key2"/>
                               <Picker.Item label="Lampung Bakauheni" value="key3"/>
                               <Picker.Item label="Lampung Bakauheni" value="key4"/>
                               </Picker>
                            </Item>
                        </Body>
                    </CardItem>
                    </Card>
                    
                    <Card>
                        <CardItem header>
                            <Text>Tanggal Masuk Pelabuhan</Text>
                        </CardItem>
                    <CardItem>
                        <Body>
                            <Item picker>
                                <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Tanggal Masuk"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                               
                            <Item picker style={{marginTop:15}}>
                            <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Tanggal Masuk"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                        </Body>
                    </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>Jam Masuk Pelabuhan</Text>
                        </CardItem>
                    <CardItem>
                        <Body>
                            <Item picker>
                                <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Jam Masuk"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                               <Picker.Item label="Pagi" value="key0"/>
                               <Picker.Item label="Siang" value="key1"/>
                               <Picker.Item label="Malam" value="key2"/>
                               </Picker>
                            </Item>
                            <Item picker style={{marginTop:15}}>
                            <Picker
                               mode="dropdown"
                               style={{
                                   width: undefined
                               }} 
                               placeholder="Pilih Jam Masuk"
                               placeholderStyles={{
                                   color: "blue"
                               }}>
                              <Picker.Item label="Pagi" value="key0"/>
                               <Picker.Item label="Siang" value="key1"/>
                               <Picker.Item label="Malam" value="key2"/>
                               </Picker>
                            </Item>
                        </Body>
                    </CardItem>
                    </Card>
                   

                </Content>
            </Container>
        )
    }
}