import React, { ChangeEvent, ReactElement } from 'react'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { Game } from 'types'
import { List, ListItem } from './styles'

interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	if (err) {
		return <p>Impossible de récupérer le jeu</p>
	}
	if (!games?.length) {
		return <p>Aucun jeu disponible</p>
	}
	return (
		<>
			<GameFilter onChange={onFilterChange} />
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GameList
