import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component{
	static propTypes = {
		userlist: propTypes.array.isRequired
	}
	constructor(props) {
		super(props)
		// this.handleClick = this.handleClick.bind(this)
	}
	handleClick(v){
		console.log(123)
		this.props.history.push(`/chat/${v.user}`)
	}
	render() {
		return (
			<WingBlank>
				{this.props.userlist.map(v=>(
					v.avatar ? (<Card 
									key={v._id} 
									onClick={() => this.handleClick(v)}
								>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						>
						</Card.Header>
						<Card.Body>
							{v.type=="boss" ? <div>公司：{v.company}</div> : null}
							{v.desc.split('\n').map(d=>(
								<p key={d}>{d}</p>
							))}
							{v.type=="boss" ? <div>薪资：{v.money}</div> : null}
						</Card.Body>
					</Card>) : null
				))}
			</WingBlank>
		)
	}

}

export default UserCard