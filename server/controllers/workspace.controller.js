const Workspace = require('../models/workspace.model')
const ApiError = require('../errors/api-error')

const createWorkspace = async (req, res, next) => {
	try {
		const newWorkspace = await Workspace.create(req.body)
		res.status(201).json(newWorkspace)
	} catch (error) {
		next(error)
	}
}

const getAllWorkspaces = async (req, res, next) => {
	try {
		const allWorkspaces = await Workspace.find()
		res.status(200).json(allWorkspaces)
	} catch (error) {
		next(error)
	}
}

const getWorkspaceById = async (req, res, next) => {
	try {
		const workspace = await Workspace.findById(req.params.workspaceId)
		if (!workspace) {
			throw ApiError.NotFoundError('Workspace not found.')
		}
		res.status(200).json(workspace)
	} catch (error) {
		next(error)
	}
}

const updateWorkspaceById = async (req, res, next) => {
	try {
		const updatedWorkspace = await Workspace.findByIdAndUpdate(
			req.params.workspaceId,
			req.body,
			{ new: true }
		)
		if (!updatedWorkspace) {
			throw ApiError.NotFoundError('Workspace not found.')
		}
		res.status(200).json(updatedWorkspace)
	} catch (error) {
		next(error)
	}
}

const deleteWorkspaceById = async (req, res, next) => {
	try {
		const { workspaceId } = req.params
		const deletedWorkspace = await Workspace.findByIdAndDelete(workspaceId)
		if (!deletedWorkspace) {
			throw ApiError.NotFoundError('Workspace not found.')
		}
		res.status(200).json({ message: 'Workspace deleted successfully!' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	createWorkspace,
	getAllWorkspaces,
	getWorkspaceById,
	updateWorkspaceById,
	deleteWorkspaceById
}
