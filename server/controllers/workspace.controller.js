const Workspace = require('../models/workspace.model')
const { errorHandler } = require('../utils/errorHandler')

// * Workspace
const createWorkspace = async (req, res) => {
	try {
		const newWorkspace = await Workspace.create(req.body)
		res.status(201).json(newWorkspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllWorkspaces = async (req, res) => {
	try {
		const allWorkspaces = await Workspace.find()
		res.status(200).json(allWorkspaces)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getWorkspaceById = async (req, res) => {
	try {
		const workspace = await Workspace.findById(req.params.workspaceId)
		res.status(200).json(workspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateWorkspaceById = async (req, res) => {
	try {
		const updatedWorkspace = await Workspace.findByIdAndUpdate(
			req.params.workspaceId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedWorkspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteWorkspaceById = async (req, res) => {
	try {
		await Workspace.findByIdAndDelete(req.params.workspaceId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	createWorkspace,
	getAllWorkspaces,
	getWorkspaceById,
	updateWorkspaceById,
	deleteWorkspaceById
}
