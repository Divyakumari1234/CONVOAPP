# Deployment Guide for CONVOAPP

This guide will help you deploy your DOCX to PDF converter application.

## Project Structure
- **Frontend**: React + Vite application
- **Backend**: Express.js server with file conversion

## Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) - Recommended

#### Frontend Deployment on Vercel

1. **Push your code to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy Frontend to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Set the **Root Directory** to `frontend`
   - Add Environment Variable:
     - Key: `VITE_API_URL`
     - Value: `https://your-backend-url.onrender.com` (you'll get this after backend deployment)
   - Click "Deploy"

#### Backend Deployment on Render

1. **Deploy Backend to Render**:
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New +" → "Web Service"
   - Connect your repository
   - Configure:
     - **Name**: convoapp-backend
     - **Root Directory**: `backend`
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Add Environment Variables:
     - `NODE_ENV`: `production`
     - `PORT`: `10000` (Render uses this port)
   - Click "Create Web Service"

2. **Update Frontend Environment Variable**:
   - After backend is deployed, copy the Render URL (e.g., `https://convoapp-backend.onrender.com`)
   - Go back to Vercel → Your Project → Settings → Environment Variables
   - Update `VITE_API_URL` with your Render backend URL
   - Redeploy the frontend

### Option 2: Netlify (Frontend) + Railway (Backend)

#### Frontend on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Add Environment Variable:
   - `VITE_API_URL`: Your backend URL

#### Backend on Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Configure:
   - **Root Directory**: `backend`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `PORT`: (Railway will provide this automatically)

## Important Notes

1. **CORS**: The backend is configured to allow all origins. For production, consider restricting CORS to your frontend domain.

2. **File Storage**: The current setup uses local file storage. For production, consider using cloud storage (AWS S3, Cloudinary, etc.) as most hosting platforms have ephemeral file systems.

3. **Environment Variables**: Make sure to set `VITE_API_URL` in your frontend deployment platform with your backend URL.

4. **Backend URL Format**: 
   - Development: `http://localhost:3000`
   - Production: `https://your-backend-url.onrender.com` (or your chosen platform)

## Testing After Deployment

1. Visit your frontend URL
2. Upload a DOCX file
3. Check if the conversion works
4. Verify the PDF download

## Troubleshooting

- **CORS Errors**: Make sure your backend URL in `VITE_API_URL` is correct
- **404 Errors**: Check that your backend routes are correct
- **File Upload Issues**: Verify that the `uploads` and `files` directories exist in your backend
- **Build Errors**: Check the build logs in your deployment platform

## Free Tier Limitations

- **Render**: Free tier spins down after 15 minutes of inactivity (first request may be slow)
- **Vercel**: Generous free tier, no spin-down
- **Netlify**: Generous free tier
- **Railway**: Limited free credits per month

Choose the platform that best fits your needs!

