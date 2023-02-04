import Field from './field';

export default class toc extends Field{
	constructor(instruct){
		super(...arguments)
	}

	static get type(){return 'field.toc'}
}
