const Workspace = require('../models/workspace.model')

const createWorkspace = async (req, res) => {
	try {
		const newWorkspace = await Workspace.create(req.body)
		res.status(201).json(newWorkspace)
	} catch (error) {
		next(error)
	}
}

const getAllWorkspaces = async (req, res) => {
	try {
		const allWorkspaces = await Workspace.find()
		res.status(200).json(allWorkspaces)
	} catch (error) {
		next(error)
	}
}

const getWorkspaceById = async (req, res) => {
	try {
		const workspace = await Workspace.findById(req.params.workspaceId)
		if (!workspace) {
			return res.status(404).json({ error: 'Workspace not found' })
		}
		res.status(200).json(workspace)
	} catch (error) {
		next(error)
	}
}

const updateWorkspaceById = async (req, res) => {
	try {
		const updatedWorkspace = await Workspace.findByIdAndUpdate(
			req.params.workspaceId,
			req.body,
			{ new: true }
		)
		if (!updatedWorkspace) {
			return res.status(404).json({ error: 'Workspace not found' })
		}
		res.status(200).json(updatedWorkspace)
	} catch (error) {
		next(error)
	}
}

const deleteWorkspaceById = async (req, res) => {
	try {
		await Workspace.findByIdAndDelete(req.params.workspaceId)
		res.status(204).send()
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
