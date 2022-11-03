import './style.css'

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code }
}

generateError('An error', 500)
