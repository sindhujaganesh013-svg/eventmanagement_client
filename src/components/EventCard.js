import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event = {}, onEdit, onDelete, isAdmin }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  // Calculate days until event safely
  const eventDate = event.date ? new Date(event.date) : null;
  const daysUntil = eventDate ? Math.ceil((eventDate - new Date()) / (1000 * 60 * 60 * 24)) : null;

  // Mock rating (replace with real data if available)
  const rating = 4.5;
  const reviewCount = 127;

  const formatDate = (date) => {
    if (!date) return 'TBA';
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <div className="event-card fade-in">
      {event.images?.length > 0 && !imageError ? (
        <img
          src={event.images[0]}
          alt={event.title || 'Event'}
          className="event-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="event-image-placeholder">🎉</div>
      )}

      <div className="event-content">
        {event.category && <span className="event-category">{event.category}</span>}
        <h3>{event.title || 'Untitled Event'}</h3>

        {!isAdmin && (
          <div className="event-rating">
            <div className="stars">
              {'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}
            </div>
            <span className="rating-count">({reviewCount} reviews)</span>
          </div>
        )}

        <p className="event-description">{event.description || 'No description available.'}</p>

        {isAdmin && (
          <div className="event-meta">
            <span className="event-price">Free</span>
            <span className={`event-status ${event.isPublished ? 'published' : 'unpublished'}`}>
              {event.isPublished ? '✓ Published' : '✗ Draft'}
            </span>
          </div>
        )}

        <div className="event-details">
          <p>{event.location?.venue || 'TBA'}</p>
          <p>{formatDate(event.date)}</p>
          {event.capacity && <p>{event.capacity} attendees max</p>}
        </div>

        {!isAdmin && daysUntil > 0 && (
          <div className="event-countdown">
            <span className="countdown-label">Starts in</span>
            <span className="countdown-value">{daysUntil} days</span>
          </div>
        )}

        {isAdmin ? (
          <div className="event-actions">
            <button onClick={() => onEdit?.(event)} className="btn-edit">✎ Edit</button>
            <button onClick={() => onDelete?.(event._id)} className="btn-delete">🗑 Delete</button>
          </div>
        ) : (
          <div className="event-actions">
            <button onClick={() => event._id && navigate(`/event/${event._id}`)} className="btn-view">
              View Details →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
