import { renderHook } from '@testing-library/react-hooks'
import useNotes from '../useNotes';

test('should use notes', () => {
	const { result } = renderHook(() => useNotes())
	
	const { notes } = result.current
	expect(notes.length).toBe(0)

})
