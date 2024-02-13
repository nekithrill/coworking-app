const Workspace = require('../models/workspace.model')
const { errorHandler } = require('../utils/errorHandler')

// [@] Workspace
const createWorkspace = async (req, res) => {
	try {
		const newWorkspace = await Workspace.create(req.body)
		res.status(201).json(newWorkspace)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getAllWorkspaces = async (req, res) => {
	try {
		const allWorkspaces = await Workspace.find()
		res.status(200).json(allWorkspaces)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getWorkspaceById = async (req, res) => {
	try {
		const workspace = await Workspace.findById(req.params.workspaceId)
		if (!workspace) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(workspace)
	} catch (error) {
		errorHandler(400, error, res)
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
			return errorHandler(404, error, res)
		}
		res.status(200).json(updatedWorkspace)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const deleteWorkspaceById = async (req, res) => {
	try {
		await Workspace.findByIdAndDelete(req.params.workspaceId)
		res.status(204).send()
	} catch (error) {
		errorHandler(400, error, res)
	}
}

module.exports = {
	createWorkspace,
	getAllWorkspaces,
	getWorkspaceById,
	updateWorkspaceById,
	deleteWorkspaceById
}
