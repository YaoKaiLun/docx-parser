import Field from './field';

export default class hyperlink extends Field{
	constructor(instruct){
		super(...arguments)
		this.link=instruct.split('"')[1]
	}
	getLink(){
		return this.link
	}

	static get type(){return 'field.hyperlink'}
}
