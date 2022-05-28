import React, { ChangeEvent, ReactElement } from 'react'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { Game } from 'types'
import { List, ListItem, Lien, Error } from './styles'

interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	if (err) {
		return <Error>Impossible de récupérer le jeu</Error>
	}
	if (!games?.length) {
		return (
			<Error>
				Aucun jeu disponible merci de &nbsp; <Lien href="/"> cliquer ici</Lien>.
			</Error>
		)
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
