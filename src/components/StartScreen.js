import React from 'react';
import { connect } from "react-redux";
import { startCountdown, setSentence } from "../redux/actions";
import DelayedMessage from './DelayedMessage';

import './StartScreen.sass';

const DESCRIPTION = "Ao iniciar, uma frase aleatória aparece, e seu objetivo é digitá-la o mais rápido possível."

const SENTENCES = [
  "A lebre decidiu então fazer uma pequena sesta junto à árvore do melro Fortunato, pois a tartaruga ia de tal maneira devagar que a lebre, em duas passadas, a alcançaria rapidamente e conseguiria ganhar a corrida.",
  "Pinóquio assim fez e ficou à espera que as moedas de ouro se transformassem numa árvore de dinheiro. Esperou muito tempo até que, cansado, adormeceu. Os homens maus apareceram e levaram as moedas de ouro, enquanto Pinóquio dormia.",
  "O patinho seguiu o seu caminho e, ao chegar a um grande lago, refugiou-se junto a uns juncos, e ali ficou durante vários dias. Um dia, muito cedo, o patinho feio foi acordado por vozes de crianças.",
  "No navio naufragado, Ariel tinha encontrado um garfo, e como não sabia o que era aquilo, mostrou-o à gaivota Sabichão. Isto é um garfo. Pertence ao mundo dos humanos e serve para pentear os cabelos, dizia o Sabichão, muito convencido do que dizia.",
  "Ao anoitecer, os sete anões regressavam à sua casinha, quando deram com Branca de Neve, adormecida nas suas caminhas. Que surpresa! Com tanta excitação, Branca de Neve acordou, espantada e rapidamente se apresentou",
  "O lobo mau abriu a porta e, sem fazer barulho, foi ao quarto da avozinha e comeu-a. A seguir, vestiu as suas roupas, enfiou a touca, colocou no nariz os óculos da avó, e meteu-se na cama, cobrindo-se muito bem com uma manta.",
  "Como o pai de Cinderela viajava muito, a madrasta malvada e as suas novas irmãs obrigavam a Cinderela, na ausência do pai, a fazer todos os trabalhos domésticos, fazendo troça dela sempre que podiam, e fingindo-se muito amigas na presença do pai.",
  "O lobo, ao entrar pela chaminé, caiu no caldeirão de água quente e queimou o rabo, fugindo o mais rápido que podia para o meio da floresta. Os dois porquinhos agradeceram ao seu irmão mais velho, e aprenderam a lição.",
  "Numa tarde em que o marido vinha da floresta carregado com lenha, o duende apareceu-lhe de dentro do tronco de uma árvore e disse-lhe: Olá bom homem! Sentes-te bem? Pareces cansado e triste… Será que estás com fome ou doente?",
  "Na manhã seguinte, a princesa desceu para tomar o pequeno almoço. O rei e a rainha já estavam sentados à mesa. A princesa saudou os reis e sentou-se. Então a rainha perguntou: Como passou a noite, princesa?"
]

class StartScreen extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
    fetch("https://type-racer-api.herokuapp.com/lerolero")
      .then(res => res.json())
      .then(
        (result) => {
					this.props.setSentence(result.text)
					this.setState({
            isLoading: false
          });
        },
        (error) => {
          this.props.setSentence(SENTENCES[Math.floor(Math.random() * 10)])
          this.setState({
            isLoading: false
          });
        }
      )
  }

	handleButtonClick = () => {
		this.props.startCountdown();
	}
	render() {
		return (
			<div className="StartScreen container">
				<div className="game-description">
					<DelayedMessage message={DESCRIPTION}/>
					<button type="button" className="btn" disabled={this.state.isLoading} onClick={this.handleButtonClick}>{this.state.isLoading ? "CARREGANDO" : "JOGAR"}</button>
				</div>
			</div>
		)
	}
}

export default connect(
	null,
	{ startCountdown, setSentence }
)(StartScreen)