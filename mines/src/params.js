import {Dimensions} from 'react-native';

const params = {
  blockSize: 30, // largura do bloo
  borderSize: 5, // largura da borda
  fontSize: 15, // Fonte
  headerRatio: 0.15, // Proporção do painel superior
  difficultLevel: 0.1, // dificuldade
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize); // Pega a porpoção de quantos blocks cabem na coluna
  },
  getRowsAmount(){
    const totalHeight = Dimensions.get('window').height;
    const boarderHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boarderHeight / this.blockSize);
  },
};


export default params;
